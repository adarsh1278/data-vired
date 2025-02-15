'use client'
import DivAnimateX from "../utils/DivAnimateX";

const BlogCategory = () => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="sidebar_title">
        <h4>CATEGORIES</h4>
      </div>
      <div className="single_category">
        <ul>
          <li>
            <a href="#">
              Education <sup>11</sup>
            </a>
          </li>
          <li>
            <a href="#">
              Ai Content <sup>44</sup>
            </a>
          </li>
          <li>
            <a href="#">
              New Course <sup>33</sup>
            </a>
          </li>
          <li>
            <a href="#">
              Marketing <sup>14</sup>
            </a>
          </li>
          <li>
            <a href="#">
              Software <sup>21</sup>
            </a>
          </li>
          <li>
            <a href="#">
              Design <sup>01</sup>
            </a>
          </li>
        </ul>
      </div>
    </DivAnimateX>
  );
};

export default BlogCategory;
