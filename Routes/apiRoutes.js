// routes/serviceRoutes.js
import express from "express";
import {
  getAllServices,
  getServiceBySlug,
  updateService,
  createService,
  deleteService,
} from "../controllers/service.js";

import {
  getAllQuotations,
  getQuotationById,
  createQuotation,
  updateQuotation,
  deleteQuotation,
} from '../controllers/leadsQuotationController.js';

import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blog.js';

import {
  getSeoServices,
  getSeoServiceById,
  createSeoService,
  updateSeoService,
  deleteSeoService
} from '../controllers/seoServices.js';

import {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();
router.get("/service/", getAllServices);
router.post("/service/", createService);
router.delete("/service/:id", deleteService);
router.put("/service/:id", updateService);


// quotations and leads 
router.get('/leads-quotations', getAllQuotations);
router.get('/leads-quotations/:id', getQuotationById);
router.post('/leads-quotations', createQuotation);
router.put('/leads-quotations/:id', updateQuotation);
router.delete('/leads-quotations/:id', deleteQuotation);


//blogs
router.get('/blogs', getBlogs);               // Fetch all blogs
router.get('/blogs/:id', getBlogById);        // Fetch single blog
router.post('/blogs', createBlog);            // Create blog
router.put('/blogs/:id', updateBlog);         // Edit blog
router.delete('/blogs/:id', deleteBlog); 

//seo-services
router.get('/seoServices', getSeoServices);             // Fetch all SEO services
router.get('/seoServices/:id', getSeoServiceById);      // Fetch single SEO service
router.post('/seoServices', createSeoService);          // Create SEO service
router.put('/seoServices/:id', updateSeoService);       // Edit SEO service
router.delete('/seoServices/:id', deleteSeoService);    // Delete SEO service

//Testimonials
router.get('/testimonials', getTestimonials);              // Fetch all testimonials
router.get('/testimonials/:id', getTestimonialById);       // Fetch a single testimonial by ID
router.post('/testimonials', createTestimonial);           // Create a new testimonial
router.put('/testimonials/:id', updateTestimonial);        // Update a testimonial by ID
router.delete('/testimonials/:id', deleteTestimonial);

export default router;
