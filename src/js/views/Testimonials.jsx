import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import NavBarRibbon from '../components/NavBarRibbon.jsx';
import Footer from '../components/Footer.jsx';
import Form from '../components/Form.jsx';

export default class Testimonials extends Flux.DashView {
    
    
  render() {
    return (
        <div className="testimonialsDiv">
            <div>
                <NavBarRibbon />
            </div>
            
            
            <div className="row rowOne">
                <div className="col-12 col-lg-8 col-md-10 mx-auto topRow">
                </div>
                <div className="col-12 col-lg-10 col-md-10 mx-auto col-centered">
                    <p> Can you imagine what it is like to live with chronic life threatening leg ulcers for 21years? No, I am not diabetic. Neither am I obese or fat. My feet were discoloured (really black) and decorated with sores that were like deep trenches. Thank God they did not smell. And thank God for pants/trousers. For years I held on to a deep conviction that God had healed my body and what I was actually looking at was “the thorn in my flesh” I developed this disposition because I did not know what else to do!

After trying what the doctors in Jamaica prescribed and what was recommended by everyone who happened to get a glimpse of what was under my pants, (of course nothing really worked and even if something did it was short-lived) I applied my own remedy: I saidGod you take this case because I am going to get on with my life. So I developed thisattitude: “Feet I am going… whether you come along or not!!

When I met Dr, Jay Rhodes he marvelled that I was alive. I told him the only reason why I was alive- God kept me! He respected that but he said, ‘I want to understand the science of it” I knew then I was in good hands! Dr Rhodes wanted to know the “why” about my feet. For the first time in 21 years a doctor was investigating my condition and not prescribing “band aids”. I did blood tests, x-rays and I now think that all the conversations we had were part of his way of establishing a profile of me before he began his intensive care – ever day- including Saturdays and Sundays for 21 days! One day during his usual treatment (observing the changes) Dr Rhodes remarked. “These feet were waiting for me! And that they were!

Dr Jay Rhodes you are a podiatrist par excellence! The treatment and care I got from you and Denise were stellar! I will never forget how you continued to be in charge of my treatment while you were undergoing treatment in the hospital! You were ill but you continued to treat me by giving daily instructions to Denise and medical feedback to me after seeing the pictures Denise sent you before she began her scrubs!

Dr Jay Gerald Rhodes you are the best!

You are so far ahead of all the rest!

And in Jamaica we say, ‘nobody can test!!!

God bless you and your practice.</p>
                
                
                    <div className="columnText">
                    </div>
                    <Form />

                </div>
                <div className="col-12 col-lg-8 col-md-10 mx-auto">
                </div>
            </div>
            
            
            <Footer />
        </div>
    );
  }
}
