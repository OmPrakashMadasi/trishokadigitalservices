import React, { useEffect, useState } from "react";
import styles from "./Careers.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CareersForm from "../../../careersforms/Careersform";
import axios from "axios"; // Ensure axios is installed

export const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [jobs, setJobs] = useState([]); // State to hold jobs
  const [selectedJob, setSelectedJob] = useState(null); // State to track the selected job
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility after 1 second
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Fetch jobs from the backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/jobs/'); // Update with your API endpoint
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleApplyClick = (job) => {
    setSelectedJob(job); // Set the selected job when "Apply Now" is clicked
    setShowModal(true); // Show the modal
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedJob(null); // Clear the selected job when modal closes
  };

  return (
    <div>
      <header className={styles.header}>
        <marquee className={styles.marquee}>
          Come let's build Something of great Value
        </marquee>
      </header>

      <div className={styles.CareeresBg}>
        <section className="text-center">
          <h2 className={styles.sectionTitle}>CAREERS</h2>
        </section>

        <div className="container">
          {/* Digital Marketing Card */}
          {jobs.map((job, index) => {
            return (
              <div key={index}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "60vh" }}
                >
                  <div
                    className={`card p-3 ${styles.animatedCard} ${
                      isVisible ? styles.visible : ""
                    }`}
                    style={{ width: "100%", maxWidth: "800px" }}
                  >
                    <h4 className="mb-2" style={{ fontFamily: "system-ui" }}>
                      {job.title}
                    </h4>
                    <div
                      className="d-flex flex-wrap mb-2"
                      style={{ gap: "20px" }}
                    >
                      <p className={styles.tag}>{job.experience_level}</p>
                      <p className={styles.tag}>
                        {job.immediate_joiner ? "Immediate Joiner" : "Not Immediate"}
                      </p>
                      <p className={styles.tag}>{job.location}</p>
                    </div>
                    <hr />
                    <h4 className="mb-3" style={{ fontFamily: "system-ui" }}>
                      Minimum Qualification
                    </h4>
                    <ul style={{ fontFamily: "system-ui" }}>
                      <li><b>{job.minimum_qualification}</b></li>
                      {job.additional_requirements1 && (

<li key={job.additional_requirements1}>{job.additional_requirements1}</li>

)}
{job.additional_requirements2 && (

<li key={job.additional_requirements2}>{job.additional_requirements2}</li>

)}
{job.additional_requirements3 && (

<li key={job.additional_requirements3}>{job.additional_requirements3}</li>

)}
{job.additional_requirements4 && (

<li key={job.additional_requirements4}>{job.additional_requirements4}</li>

)}
{job.additional_requirements5 && (

<li key={job.additional_requirements5}>{job.additional_requirements5}</li>

)}
{job.additional_requirements6 && (

<li key={job.additional_requirements6}>{job.additional_requirements7}</li>

)}
{job.additional_requirements7 && (

<li key={job.additional_requirements7}>{job.additional_requirements7}</li>

)}
{job.additional_requirements8 && (

<li key={job.additional_requirements8}>{job.additional_requirements8}</li>

)}
{job.additional_requirements9 && (

<li key={job.additional_requirements9}>{job.additional_requirements9}</li>

)}
{job.additional_requirements10 && (

<li key={job.additional_requirements10}>{job.additional_requirements10}</li>

)}
                    
                    </ul>
                    {/* <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-outline-primary btn-sm"
                        style={{ fontFamily: "system-ui" }}
                      >
                        Show More
                      </button>
                      <button
                        className={`btn btn-sm ${styles.applyButton}`}
                        style={{ fontFamily: "system-ui" }}
                        onClick={() => handleApplyClick(job)} // Set the selected job on click
                      >
                        Apply Now
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single Modal for Applying */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block" }} // Show modal if applicable
            tabIndex="-1"
            role="dialog"
            aria-labelledby="applyModalLabel"
            aria-hidden="true"
          >
            <div
              className="modal-dialog"
              role="document"
              style={{ marginTop: "6%" }}
            >
              <div className="modal-content">
                {/* <div className="modal-body" style={{height:5}}> */}
                <CareersForm job={selectedJob} onClose={handleModalClose} />
                {/* </div> */}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container text-center my-4">
        <h2 className="mb-4" style={{ color: '#3b999f' }}>
          What People are Saying About Us!
        </h2>
        <div className="row justify-content-center">
          {/* Review 1 */}
          <div className="col-12 col-md-6 mb-4">
            <div className="review-card p-3 border rounded">
              <h5 className="review-author" style={{ color: '#3b999f' }}>Priyanshika Reddy</h5>
              <p className="review-text" style={{ color: 'black' }}>
                "Great service and support! Highly recommended."
              </p>
              <div className="stars mb-2" style={{ color: "#f5b042" }}>
                {/* 4-star rating */}
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                {/* <i className="far fa-star"></i> */}
              </div>
              <span className="text-muted">Posted on Google</span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="col-12 col-md-6 mb-4">
            <div className="review-card p-3 border rounded">
              <h5 className="review-author" style={{ color: '#3b999f' }}>Maheshwari Kamal</h5>
              <p className="review-text" style={{ color: 'black' }}>
                "Excellent customer care and timely response."
              </p>
              <div className="stars mb-2" style={{ color: '#f5b042' }}>
                {/* 4-star rating */}
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="far fa-star"></i>
              </div>
              <span className="text-muted">Posted on Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
