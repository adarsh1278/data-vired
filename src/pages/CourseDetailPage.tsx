import { useParams } from "react-router-dom";
import BreadCrumbSection from "../components/breadcrumb/BreadCrumbSection";
import CourseDetailSection from "../components/course/CourseDetailSection";
import Layout from "../components/layout/Layout";
import { courseData } from "../data/data";

const CourseDetailPage = () => {
  const { slug } = useParams();
  const courseInfo = courseData.find((item) => item.slug === slug);
  return (
    <main className="eduleb-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Course Details" />
        {courseInfo && <CourseDetailSection courseInfo={courseInfo} />}
      </Layout>
    </main>
  );
};

export default CourseDetailPage;
