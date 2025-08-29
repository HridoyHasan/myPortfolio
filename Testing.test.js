import React from 'react';
import { render } from '@testing-library/react';
import Skills from './app/skills';
import HomePage from './app/page';


//Unit Testing

// describe('Skills', () => {
//   test('renders without crashing', () => {
//     render(<Skills />);
//   });

//   test('renders the correct number of skill categories', () => {
//     const { getAllByRole } = render(<Skills />);
//     const categories = getAllByRole('heading', { level: 2 });
//     expect(categories.length).toBe(3); // Assuming there are 3 categories
//   });

//   test('renders skills correctly for each category', () => {
//     const { getByText } = render(<Skills />);
//     expect(getByText('Testing')).toBeInTheDocument();
//     expect(getByText('Basic Web Development')).toBeInTheDocument();
//     expect(getByText('Tools')).toBeInTheDocument();
//   });

//   test('renders skill names and images correctly', () => {
//     const { getByAltText } = render(<Skills />);
//     expect(getByAltText('Test Case Design')).toBeInTheDocument();
//     expect(getByAltText('HTML5')).toBeInTheDocument();
//     expect(getByAltText('Postman')).toBeInTheDocument();
//   });
// });











//Integration Test (have to mock swiper and emailjs component as it requires real browser to test)


// Mocking `emailjs-com` to avoid actual API calls
jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve('Mocked Email Sent')),
}));

// Mocking `swiper/react` to simplify the rendering of Swiper components
jest.mock('swiper/react', () => {
  const Swiper = ({ children }) => <div>{children}</div>;
  const SwiperSlide = ({ children }) => <div>{children}</div>;
  return { Swiper, SwiperSlide };
});
jest.mock('swiper/css', () => {});
jest.mock('swiper/css/pagination', () => {});
jest.mock('swiper/css/navigation', () => {});
jest.mock('swiper/css/autoplay', () => {});
jest.mock('swiper/modules', () => ({
  Autoplay: jest.fn(),
  Navigation: jest.fn(),
}));

test('renders ExperienceSection and ProjectSection correctly', () => {
  // Render the HomePage component
  const { getByText } = render(<HomePage />);

  // Assertions for ExperienceSection and ProjectSection content
  expect(getByText('Experience')).toBeInTheDocument();
  expect(getByText('Projects')).toBeInTheDocument();
});

