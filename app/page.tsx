import React from 'react';
import Layout from './layout';
import '../app/globals.css';  
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
const MyPage = () => {
  return (
    <Layout>
      <div className="container">
        <div>
        <h1>Generate your next Twitter bio using Chatgpt</h1>
        </div>

        <div className="icon-heading">
        <TbSquareRoundedNumber1Filled size={32}></TbSquareRoundedNumber1Filled>
        <h2 className="steps">Copy your current bio (or write few sentences about yourself).</h2>
        </div>
        
      <textarea
        className="my-textarea"
        placeholder="eg. Senior Developer Advocate @Worqhat. Tweeting about web development, AI, and React / Next.js, Writing nutlope.substack.com."
      />
      <div className="icon-heading">
      <TbSquareRoundedNumber2Filled size={32}></TbSquareRoundedNumber2Filled>
      <h2 className="steps">Select your vibe</h2>
      </div><div>
      <select className="menu">
        <option value="">Select an option</option>
        <option value="twitter" className="stylesoption">Twitter</option>
        <option value="linkedin" className="stylesoption">LinkedIn</option>
      </select>
    </div>
    <button className="generatebtn">Generate your bio</button>
      </div>
    </Layout>
  );
};

export default MyPage;
