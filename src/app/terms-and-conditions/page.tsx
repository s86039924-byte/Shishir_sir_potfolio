'use client';

import React from 'react';
import './TermsAndConditions.css';

const terms = [
    "All communications regarding enrollment to any program must be addressed to \"The Counsellor, IIT STUDY FORUM, and sent to our respective centers.",
    "Guardian/Parent shall be responsible for providing correct information at the time of admission. They are expected to ensure payment of fees and regular attendance of their wards. Regular attendance shall be observed and students and parents will be sole responsible for his/her absenteeism from the classes.",
    "Every student must attend the classes regularly and punctually. Latecomers are not allowed to attend the classes.",
    "In case students remain absent from classes for more than two days, they are expected to submit leave application explaining the reason of absence duly signed by their parents. No compensatory class will be given to the absentees without leave application.",
    "Every student has to attend classes in their assigned batches only. Batch once allotted will not be changed under any circumstances.",
    "The students must keep the study schedule on topmost priority.",
    "It is compulsory for students to read the notice board for any announcement made by the institute from time to time.",
    "Every student must produce Identity Card while entering the institute/test centre premises. Student without this will not be permitted to attend the classes/appear in the test. A fine of Rs.20 per day will be charged from the student who forgets to bring the I.C. Duplicate I.C. can be obtained on payment of Rs. 50/- in case original I.C. is lost.",
    "Students are expected to behave in a decent, orderly manner in the building premises.",
    "No Guardian/Parent can see a student directly in the classroom. Such requests would be entertained by the reception.",
    "Students are supposed to strictly adhere to the schedule of payment of fees as mentioned. Non-payment of balance fees before due date (for students availing installment facilities) will result in cancellation of the admission.",
    "Any student caught adopting unfair practice (copying) during the admission cum scholarship test is liable for immediate removal from the examination hall and no refund of admission cum scholarship test fees paid shall be made.",
    "The admission cum scholarship test question paper and answer sheet of any student will be the property of IIT STUDY FORUM and shall not be given to any student. The marks allotted are final and no disputes or claims on this account shall be entertained.",
    "Any student having once appeared for admission cum scholarship test at any of our centre (if selected for either scholarship or admission) is not eligible to appear in the next admission cum scholarship tests.",
    "The student who is enrolled with institute will have to regularly work hard. In case, if the teachers feel that the student is not working hard, creating indiscipline in the institute, irregular in attendance, not responding properly, he/she may be expelled from the institute. Any student, whose record falls below the minimum acceptable standard, will be asked to withdraw from the institute. No fee or part of the fee will be refunded in such cases.",
    "Students are expected to be strictly honest in their own interest during the periodic tests, however if any student is found copying, will be expelled without any excuse.",
    "The responsibility of getting Entrance Examination form forwarded to the examining body is that of the student himself/herself or that of the Guardian."
];

export default function TermsAndConditionsPage() {
    return (
        <main className="terms-page">
            <div className="container">
                <article className="terms-content">
                    <header className="terms-header">
                        <h1 className="terms-title">IIT STUDY FORUM</h1>
                        <p className="terms-subtitle">Terms & Conditions (Instructions for the Applicants)</p>
                    </header>

                    <ul className="terms-list">
                        {terms.map((term, idx) => (
                            <li key={idx} className="terms-item">{term}</li>
                        ))}
                    </ul>

                    <footer className="terms-footer">
                        <div className="terms-page-num">11</div>
                    </footer>
                </article>
            </div>
        </main>
    );
}
