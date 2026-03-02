import React, { useState } from "react";
import "./whyUs.css";

type WorkflowStep = {
  label: string;
  description: string;
  icon: string;
  details: string[];
};

const workflowSteps: WorkflowStep[] = [
  {
    label: "Foundation & Environment",
    description: "Setting the stage for success",
    icon: "travel_explore",
    details: [
      "Competitive Environment: Highly motivating and conducive academic atmosphere with strict discipline.",
      "Small Batch Size: Homogenous small groups for focused attention and smooth progress.",
      "Well-Being Focus: Well-ventilated spaces and short breaks for refreshment between lectures.",
    ],
  },
  {
    label: "Expert Instruction",
    description: "Mastering concepts with the best",
    icon: "school",
    details: [
      "Renowned Faculty: Highly experienced, result-oriented mentors guiding every step.",
      "Structured Lecture Flow: Students always know coverage percentage and class status.",
      "Concept Clarity: Prime attention on basic fundamentals through interactive lectures.",
      "School Synchronization: Aligned with school syllabus for faster grasp of fundamentals.",
    ],
  },
  {
    label: "Practice & Refinement",
    description: "Sharpening skills through rigorous practice",
    icon: "edit_note",
    details: [
      "Comprehensive Material: Scientifically prepared high-quality study material.",
      "Graded Assignments: Assignments with varying difficulty: Ordinary, Intelligent, and I-Level.",
      "Doubt Discussion: Open discussions with concerned faculties to clear all hurdles.",
      "Problem Solving: Regular sessions dedicated to solving complex problems.",
    ],
  },
  {
    label: "Testing & Analysis",
    description: "Evaluation in real exam environment",
    icon: "laptop_mac",
    details: [
      "Real-Exam Simulation: State of the art computerized testing setup.",
      "Final Full Tests: Full syllabus tests in exam-like conditions.",
      "Deep Analysis: Detailed test analysis to identify and improve weaknesses.",
      "Regular Evaluation: Frequent quizzes and topic-wise tests to validate understanding.",
    ],
  },
  {
    label: "Support & Mentorship",
    description: "Beyond academics: Psychological and strategic support",
    icon: "favorite",
    details: [
      "Motivational Sessions: Talks for personality development and confidence building.",
      "Stress Counseling: Pre-exam stress management and counseling.",
      "Strategic Guidance: Time management tips and tricks for objective questions.",
      "Parent Feedback: Regular progress discussions with parents.",
    ],
  },
];

const WhyUsPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <div className="whyUsPage">
      <section className="wuSection">
        <div className="wuContainer">
          <img
            className="wuCornerLogo"
            src="/logo/why_us.png"
            alt="Why Us section logo"
          />
          <p className="wuEyebrow">Core Strengths Workflow</p>
          <h1 className="wuTitle">Steps to Academic Excellence</h1>

          <div className="wuStepper" role="list" aria-label="Core strengths workflow">
            {workflowSteps.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = activeStep !== null && index < activeStep;

              return (
                <article className="wuStep" role="listitem" key={step.label}>
                  <div className="wuStepTop">
                    <button
                      type="button"
                      className={`wuStepIcon ${isActive ? "isActive" : ""} ${isCompleted ? "isCompleted" : ""}`}
                      onClick={() => setActiveStep((prev) => (prev === index ? null : index))}
                      aria-label={`Open details for ${step.label}`}
                      aria-expanded={isActive}
                    >
                      <span className="material-symbols-outlined" aria-hidden="true">
                        {step.icon}
                      </span>
                    </button>

                    <div className="wuStepContent">
                      <div className="wuStepMeta">
                        <h2>{step.label}</h2>
                        <p>{step.description}</p>
                      </div>

                      {isActive && (
                        <div className="wuDetailCard">
                          <h3>{step.label} Details</h3>
                          <ul>
                            {step.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {index < workflowSteps.length - 1 && (
                    <div className={`wuConnector ${isCompleted ? "isCompleted" : ""}`} aria-hidden="true" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUsPage;
