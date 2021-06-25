import {React, useState} from 'react'

export default function About() {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [score, setScore] = useState(0);

    function handleSubmit() {
        console.log("")
    }

    function handleFormChange(e) {
        console.log(e.target.value)
        if (e.target.value ==="1922") {
            setQ1("1922 Correct!");
        } else if (e.target.value ==="carauntoohill") {
            setQ2("Carauntoohill Correct!");
        } else if (e.target.value ==="martin") {
            setQ3("Micheal Martin Correct!");
        } else if (e.target.value ==="cork") {
            setQ4("Cork Correct!");
        }
        else {
            setQ1("");
            setQ2("");
            setQ3("");
            setQ4("");
        }
    }

    return (
        <div className="main">
            <div className="about-top">
                <div className="text-above-iframe">
                    <h2>ABOUT</h2>
                    <span>Watch this video to find out more about us, we will test your knowledge below..</span>
                </div>
                <div className="iframe-container">
                    <iframe width="580" height="300" src="https://www.youtube.com/embed/yWZiO7YNoPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="about-bottom">
                <form onSubmit={handleSubmit}>
                    <div className="radio-btn-cont">
                        <div className="q-1">
                            <p>Question 1</p>
                            <span>In what year did Ireland gain independence?</span>
                            <div className="answer-display">
                                <div className="answers">
                                    <label htmlFor="1945">1945</label>
                                    <input type="radio" name="year" value="1945" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">                             
                                    <label htmlFor="1901">1901</label>
                                    <input type="radio" name="year" value="1901" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="1922">1922</label>
                                    <input type="radio" name="year" value="1922" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="1801">1801</label>
                                    <input type="radio" name="year" value="1801" onChange={handleFormChange}/>
                                </div>
                            </div>
                            {q1}
                        </div>
                        <div className="q-1">
                            <p>Question 2</p>
                            <span>What is the tallest mountain in Ireland?</span>
                            <div className="answer-display">
                                <div className="answers">
                                    <label htmlFor="mtleinster">Mt. Leinster</label>
                                    <input type="radio" name="mountain" value="mtleinster" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">                             
                                    <label htmlFor="carauntoohill">Carauntoohill</label>
                                    <input type="radio" name="mountain" value="carauntoohill" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="lughnaquilla">Lughnaquilla</label>
                                    <input type="radio" name="mountain" value="lughnaquilla" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="cpatrick">Croagh Patrick</label>
                                    <input type="radio" name="mountain" value="cpatrick" onChange={handleFormChange}/>
                                </div>
                            </div>
                            {q2}
                        </div>
                        <div className="q-1">
                            <p>Question 3</p>
                            <span>Who is current Taoiseach?</span>
                            <div className="answer-display">
                                <div className="answers">
                                    <label htmlFor="martin">Martin</label>
                                    <input type="radio" name="taoiseach" value="martin" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">                             
                                    <label htmlFor="varadkar">Varadkar</label>
                                    <input type="radio" name="taoiseach" value="varadkar" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="kenny">Kenny</label>
                                    <input type="radio" name="taoiseach" value="kenny" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="mcdonald">McDonald</label>
                                    <input type="radio" name="taoiseach" value="mcdonald" onChange={handleFormChange}/>
                                </div>
                            </div>
                            {q3}
                        </div>
                        <div className="q-1">
                            <p>Question 4</p>
                            <span>Largest county by area?</span>
                            <div className="answer-display">
                                <div className="answers">
                                    <label htmlFor="kk">Kilkenny</label>
                                    <input type="radio" name="county" value="kk" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">                             
                                    <label htmlFor="donegal">Donegal</label>
                                    <input type="radio" name="county" value="donegal" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="cork">Cork</label>
                                    <input type="radio" name="county" value="cork" onChange={handleFormChange}/>
                                </div>
                                <div className="answers">
                                    <label htmlFor="galway">Galway</label>
                                    <input type="radio" name="county" value="galway" onChange={handleFormChange}/>
                                </div>
                            </div>
                            {q4}
                        </div>
                        <button id="about-submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
