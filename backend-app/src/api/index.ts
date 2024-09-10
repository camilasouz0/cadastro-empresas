import express from 'express';
import CompaniesModel from '../Models/CompaniesModel';
import { ValidationError } from 'sequelize';

const router = express.Router();

router.get('/companies', async (req, res) => {
  const companies = await CompaniesModel.findAll();
  await res.json(companies);
});

router.get('/companies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const company = await CompaniesModel.findByPk(id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ message: 'Company not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/companies', async (req, res) => {
  try {
    await CompaniesModel.create(req.body);
    res.status(201).json({ message: 'Company created successfully' }); // Status 201 para Created
  } catch (error) {
      if (error instanceof ValidationError) {
        
        const validationErrors = error.errors.map((err) => err.message);
        res.status(400).json({ errors: validationErrors });
        
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
});

router.put('/companies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const company = await CompaniesModel.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    await company.update(req.body);

    return res.status(200).json({ message: 'Company updated successfully', company });
  } catch (error) {
    if (error instanceof ValidationError) {
      const validationErrors = error.errors.map((err) => err.message);
      return res.status(400).json({ errors: validationErrors });
    } else {
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
});


router.delete('/companies/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const company = await CompaniesModel.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    await company.destroy();

    return res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
});


export default router;