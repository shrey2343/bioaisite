import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Proof() {
  useScrollAnimation();

  return (
    <section>
      <div className="sw-sm" style={{paddingTop:0}}>
        <div className="proof-wrap fi">
          <div className="proof-item">
            <div className="proof-n">87%</div>
            <div className="proof-l">First-round grant<br />success rate</div>
          </div>
          <div className="proof-item">
            <div className="proof-n">$18M+</div>
            <div className="proof-l">Total client funding<br />secured</div>
          </div>
          <div className="proof-item">
            <div className="proof-n">350+</div>
            <div className="proof-l">Papers in Q1/Q2<br />journals</div>
          </div>
          <div className="proof-item">
            <div className="proof-n">94%</div>
            <div className="proof-l">Course completion<br />rate globally</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proof;
