import {React, useState} from 'react'

export default function Gallery() {
    const [country, setCountry] = useState("")

    function renderSwitch(country) {
        switch (country) {
            case "usa":
                return <div className="factfile-info">
                    Population: 330 million
                    Language: English
                    Size: 3
                </div>;
            case "ireland":
                return <div className="factfile-info">
                    Population: 5 million
                    Language: English/Gaelic
                    Size: 110
                </div>;
            case "china":
                return <div className="factfile-info">
                    Population: 1400 million
                    Language: Mandarin
                    Size: 4
                </div>;
            case "russia":
                return <div className="factfile-info">
                    Population: 146 million
                    Language: Russian
                    Size: 1
                </div>;
            case "mexico":
                return <div className="factfile-info">
                    Population: 130 million
                    Language: Spanish
                    Size: 12
                </div>;
            case "germany":
                return <div className="factfile-info">
                    Population: 82 million
                    Language: German
                    Size: 41
                </div>;
            default:
                return <div className="factfile-info">NO MATCH</div>
        }
    }

    return (
        <div className="main">
            <div className="gallery-top">
                Gallery of International photos
                <label htmlFor="countries">Select a country:</label>
                <select name="countries" value={country} onChange={(e) => {
                    const selectedCountry = e.target.value;
                    setCountry(selectedCountry);
                    }}>
                    <option value="usa">USA</option>
                    <option value="ireland">Ireland</option>
                    <option value="china">China</option>
                    <option value="russia">Russia</option>
                    <option value="mexico">Mexico</option>
                    <option value="germany">Germany</option>
                </select>
                {renderSwitch(country)}
            </div>
            <div className="gallery-bottom">

            </div>
            
        </div>
    )
}
