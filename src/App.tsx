import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import FaqPage from "./pages/FaqPage";
import InstructorPage from "./pages/InstructorPage";
import InstructorDetailPage from "./pages/InstructorDetailPage";
import PricingPage from "./pages/PricingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/home-2" element={<HomePage2 />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/course/:slug" element={<CourseDetailPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/instructor/:slug" element={<InstructorDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
