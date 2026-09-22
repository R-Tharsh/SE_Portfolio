import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const projects = [
  { name: "ORN Motor Claim System", description: "Full-stack motor insurance claims platform covering claim intimation, document submission, assessment, repair estimation, approvals, payments, salvage handling, OCR verification, PDF processing, and customer communication." },
  { name: "ORN Premier Commander", description: "Insurance operations platform for high-volume policy processing with Excel/CSV ingestion, configurable mapping, validation, premium calculations, batch management, reporting, queue workers, transactions, and row-level locking." },
  { name: "ORN-PREMIA Agent", description: "Python desktop RPA solution for a Java insurance application with PyAutoGUI, OCR screen validation, configurable JSON workflows, retries, REST API integration, and application health monitoring." },
  { name: "SmartPortal Insurance Management API", description: "Laravel insurance management API covering motor, property, and SME quotation-to-policy workflows, with premium calculation, policy issuance, document workflows, signatures, PDF generation, messaging, and RBAC." },
  { name: "Insurance ID Card Printing & Management", description: "Role-based insurance ID-card platform with CSV bulk uploads, validation, duplicate detection, branch-level print queues, batch printing, printer activity tracking, inventory, audit logs, reporting, and PDF generation." },
];

const MyWork = () => (
  <div className="projects-section" id="work">
    <div className="projects-title"><h1>Selected Projects</h1><img src={theme_pattern} alt="" /></div>
    <div className="projects-grid">
      {projects.map((project) => (
        <div className="project-card" key={project.name}>
          <div className="project-card-content">
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <a href="https://github.com/R-Tharsh" className="project-link" target="_blank" rel="noopener noreferrer">View GitHub</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MyWork;
