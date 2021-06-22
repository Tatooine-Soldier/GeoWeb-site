import {React, useState} from 'react'

export default function Gallery() {
    const [country, setCountry] = useState("")

    function renderSwitch(country) {
        switch (country) {
            case "usa":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,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"/></li>
                        <li>Population: 330 million</li>
                        <li>Language: English</li>
                        <li>Size: 3</li>
                    </ul>
                </div>;
            case "ireland":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAdVBMVEX////zdTgAcT0AbTVvo4QCRCzzdjOFRCP9//35eTkDcjv2mnMGQCYFQyyhoaH5ejaMjIybSyYKRSkDbz4JLRdHYU+enp6ZZk6WTCOaTCmYUC5VKxoAazNopYX5n3v+czD7eTCBRyAJJhU+WVB/XUqLRx5JJxJ5nZ+VAAABTUlEQVR4nO3SWVbCQABFwbYVYsKkHQeGEBCH/S9RNvH+6i6hzi1vrW0yrd+3sT4+96+ZDsdTaWMdaqTpXHLNl12oviutjqGmp/KcM1k+hLp+lUXoklofkyarmMn9EyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhwoQJEyZMmDBhkjNpQx0y3U1yzZc+1LUrt7ZO9f2S66dL9fv3D8A/FZwVvuYgAAAAAElFTkSuQmCC"/></li>
                        <li>Population: 5 million</li>
                        <li>Language: English/Gaelic</li>
                        <li>Size: 110</li>
                    </ul>
                </div>;
            case "china":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAABg1BMVEX/AAr/////AA37///8AAD0AAD//vz9AA7/tbr///v/AAD4//////n/9vP7//voLDb7GDf/+f/l8QD/ABjh8wD/ACD/ABvb9QDw7QDqAADp8ADdAAD/+///ACrbAAD/4BzQAADuAADT9wD76QDV9wDt//////PK+gDa8gD/1ADtAA3/ACz/ADbt7gD06wDMAAD/2TjnlwD/4QDtKjb3vcP/r7v+tLHvwMP/7PDdL0PoABnXAB7QLEb/5fLsI0T/8Orv//fLIQDufk/XMwD5tRT2jzz/dDvrpBfzkRrnYR//yk77pzT/fyncWwD9xgDt6hHqdynffAD6Qxv2VR/3+gDkRyXnoTnaPwD8XjvXTxz5ixnsvSX7og3sZz/nghTttQD1WwD/vVD3cgDtX0TkiSLlaQrTQCfxlFvXZQbu3gW1AADgpgD/znv/1j3Ymx7XjgD/1E2x/QDUaR7nvAfV0QD3bSr3dUnrRi7+RC30i1z/zmq6PAD/8FH8iUTQag+/NgD9ql2QJAHGAAAMxklEQVR4nO2cCXvTRhqAlckM08gcRaNbsWVpFGyJSiRuu9tlt0dqUxIOB0JKAgmhtLBL2lKObmm73d32p3dGTsAcHhzbOALP+/A4JlFs680333xzSMrUHtOl0vTs8eNTpalDk8jx47NTs7OzU6XpJ0amlKdPp6b590tzpelJhAdH6dChqS43XXK4tQ4H/TkPhKOffTaXx0VPOXOlo4dnDs9MIidOnDh6tNTdqJ5tVixyZo588OE7E8lf3vngrzzjzL5UDoso1ug++ttpBCeRIPn7Pz6enZ7qJWeKy3mfAGUSgTj55OPjpenjPZvV3IlP3weTKUcF5JOPp+ZKPeTMzpbmPvv0GBg5mD8oyuhfeIQoqhp88tH0XOnlzWpqZuZQafrIu1AZUegAkrdQ9kVRMHtzFRe4xQJVgceOTM2WZg69VM7Rw+z7XM7I3pC5YK8GMP/H5IACy2GoTM7x0uExyVE6LwUhxpjHrYKlnCdA1kK5FUgwE4OhWuxcP+bIUTAhPPEQ7CBiKlJOF8DEHEJwsPi5abBSAo/stV8D45VjAhygIMAENVtnsAFZ8xrZa78GxiqH5Rvni4qHIKiczZaYHGSSUb3262Ckcl6ZQDDyls+dX06cC759kcshkyEHKJCUWRIhquAgZBrBAm20z6649Ftw0lBGmetHzwgjB7IwYBlWeDQxUPNeI3V1O15MsGGM4hReH6OTw9oUetUhBlZIcImGlp5m8eVFR5mUChkoq1cQhlB0usyFGVxOH4a1sGatNc5/iSaktwLJmasOZg1LcAwEBK/7Vuha9ZT6rasbQpUHzugSMvY246apCE8X4aQZ04xSl7aurQaOOiFdOQ7uUnot4CP93hDstRrx0qXYotcTnqUmpEIm1U3d3nLKRHA0IOqNM6e8oHJRs7cT1gThhHTlYHWn5radsiHqsgBCiYERxDf9n9gIS8HmXuQUMvcMLYdPKEJVVeDFzK2lX5kkEL8hJgAqYP3WjYDP6fCyiMUPIAZQVYRNo1A5aFg57ASBgtgRwRbNatbXWBg5T/A+/ybAfGIQ8gcAmDI+9WUwOQVqaUNHDpejqCpejakb6u2kvwwbeB03XI5h8uyDuRZCcF9ux8Qocg6f3EPbO1TXNd/rr10ghHa18lkLyELPMDCLHQDeJjk8UPgaQtDSG5arpbdFPXnXr+F8eYY/BXCj6sHySTNPXYViWDkAsBZhErXi16iVutbZPnvn3bUhZkn1rp5bDN4zIHIqRQobZRRy+OoTQXfsMNO11KLVvpLOnhtWH8HK2XjzlIG9f/7rhlOsOeXheysmxwDelq27mmWnaxf3WfNi7Nxp0JuLd797cKuKijVtOgo5gChevJbqaWhTfeu5paieocBflXfjZdxsuOnOTuY/clh3VaSWtT85vD/BrNNFimHy//N+iudj76KfuboeaVnmN/PVFwZmXREyjd7TfbwNGWXD+/3mWsZqpBYb0yuFGlAMIgehaqVS9SpepVo9VfUc59S332WppkeW5VJ6u+p5XoXheVUGP6znuzO3p73tOFtx9dpa0zhJ4MjW5UfBPptVPlhwHn8/b1Pfn5/3/Qb7cm/ez3SWcnSrrmWU/WCPOI4b/vytx4JoWP8hblDXsjTbP+9ggkGRFoj3J4cXJxA6lSuxpWuay9At3bXZX15zU2ZH19zMdrUObkqpra/FXzk93htghVzYarV9qum2be9ssYRsFikl7ztyWFpAgbceN1aiWqjbqa5zJStZZqdu/rQbXU9b60GvopmnY5gEq1/e1mrWmq7T+x4wC+Rmv3Ly/SOsvEWr5xparaZTFhwuV2LbKcs6HDe1O7hRqPvnV8V7cAwTELxIXf/+QqNx7xsEipSR95uQIeucDNbFoNUFqocWl6JZIaPOW5LejVUL6YJDTNyrWXFA4GBc9f3rQeJUnA0MgzdWDgewrpplBlzZblM3iur1ul63rCjibSr3Y+2iZ/MXHZVVLiI5rJEquNqIm0x4viD45kbO7swWRNg8bQarZxv1WqS7rIfKbC3Kc7SW5+k889AlDxmYnawojbCxuGk47ftJvvuCF1EFSjr7l8Ps8BM2MUGVOw92QiaHtS3b3Y0cLc3SKIrShr+NIAsyqAi3b5lEIWbw+LSym2zAmyun6/dyUUGyxbrgNb1e1/Y6cNZzaWHoNhaawtb0LGaRqpunDCoH5qUyRItnY5qx6s99Iof/x5+/Wwn6DwFQ0CWaISKHpQgAg+rFmOpRlxyrZtHWcqAYRt/RAApqZyg5rF4muHo5Y6MqrUtOnf7mgHK53P+nAEqxJnJ2GXzKgheDGLBB9UJmWbr2BDY2p3cDUKhxwIAMISfHJM22zQac+lM9rkY3PRXAIs3MDMbQ06Tomq+zRqXXn7ix61q8DnGRqrkBGVDOXr0DVWeJRpbr1q09OakdhTuXULG3JfXHoJHTuayElftOO6xpNGOhE9VqlruypodpqJ91jP7s5AMGVnPz9U5i8mFJgaQOJwcCskwf1jK6wqoblnjsldSNalQLY6/fzpmYSULUjYDv9yekSGqGyDmgs9CNtmmkZVpYq6XzF67HbsiaF7W1xhXc39InKRuJUfb+WMQsDtX88sGRnt9QDNtbVeZpmtnhw3Ct1VThHRq6NGM5uXEb9SmHSTGM9fllxOfjC6VmCDkwv7RMXW6k2orOiuI7iQMhclo7aVazUrud9JdzSBBAkvzQuK6U+QCrWJtQBpbD8g3fL7KdRiHroeJ19txBhDhLcVar6Ratgn7OEpRNVSXJTbcVoATBt0MOz8bAMFikaGFEGzcXSZnpwgbB3ldtV9Pr9v2kr7NUEQqa6+7D7P7dR8s3fk6QcPZnzAwoh1+EqBhm0vT1yG5/XXUMQwVmPjueVBdolro/NvvpeeDjW5v/XqHRQz2j/r1bGx4qUtYZVA7fiEWws0013W+eBjAhrExhblRiktO344a7ttRXCHg/3XPDLAut0KI31wMmtECd+cDNSuGTgdWbvr+wmJQNzC+AwfkEsGkoznrLz37svdDZ/f7Q2WpQrW7Xsy2+2wsXaW1m4ITMAgWgdX/zpwrCptm9ooLYuKJ6dT6+29cHwNhppbUw1eMKKPMtG2+DHHZWBty49buXzxR3tQXATk9NqpfOPeone0AVeJsZX8jZWQ/4rknw5ssBvAURsrEY7G4leTpZBfgGC6wGi4/72cTGyqVmW6PteI1edfhQ6y2IHADYWBFg1nvzOa1878XTn+FczysvMMohhnrHtRaqlSV6q8qHoW+BHN5bqXxnLOGVIHzmDw6fjSQxxIQXGt95AHtL3/+sqigp0tBziCJQ5Q2I9dx5E+uSgfiisdLnrDBC6uPlKikTWNn4hVXIfe5jHg/DyMkTcSdIug/hw2tV6fNyBhTwBeGTrL5WWWYv2Dz74GMrNR94dvZ65feleAri+/3xKy6C6IBNFmhsXJ7XAwnv6EZyWqNhiDlkvnKbx8hzckAnO78ss+Zb1jtP+Pw7y1qGQSDvvyExzM4LvY6zHJAx35EAQwz5gpfi/OpxtUUag7/IeOUYJuE3azCIc+Y/Huvx5O0ausD4l8fXTnk4uePfqxKiwmIl4OcZrxyEqo8ebN7/7WvfbpzCpgKLVNW8yJgjBwXVlk93GlqdfqsQjPrfbHAQjPcuKHxvW3Oe6lEY0d+qgTNJd0F5FcB47yRx7lPNqkdafO7MoiMTchegjE/9YGuuG4VZI/7v/4o0Y/wiY07IKvT+n0WRq4cr8+27v3syIT+FFX+LP2aWlkXh1s+JWtCtgE8Yc4WseH+ce7Bwu51ZCwGScp4FfvOr50HvSnvtMsJSzjMAxLpvXigv0W1W9JBCXUD0ImPOOflwgT14m2dYepZyusk34KAAqmj5CxOiok1uPc+4B548VPg8ahUa/E47hXYz9nuT7oHMcqL2O9F8UIz7rra4s+eJQGBgGTk9KbaXnIOT8wYg5QiQcgRIOQKkHAFSjgApR4CUI0DKESDlCJByBEg5AqQcAVKOAClHgJQjQMoRIOUIkHIESDkCpBwBUo4AKUeAlCNAyhEg5QiQcgRIOQKkHAFSjgApR4CUI0DKESDlCJByBEg5AqQcAVKOAClHgJQjQMoRIOUIkHIESDkCpBwBUo4AKUeAlCNAyhEg5QiQcgRIOQKkHAFSjgApR4CUI0DKESDlCJByBEg5AqQcAVKOAClHgJQjQMoRIOUIkHIESDkCpBwBUo4AKUeAWM6MlNNTzjT/NpMzqXa4nNmecmamZORIOS9HfV/K6UkuZ+6oQM7suwf9GQ8K2F+zApOICpQ+EjK/AfYEomB07Mi0UM40ixw0qRz7VCCHPxz68J2J5YND051i7yVyJM8j5QiQcgRIOQL+BFpZ7E7JXZYaAAAAAElFTkSuQmCC"/></li>
                        <li>Population: 1400 million</li>
                        <li>Language: Mandarin</li>
                        <li>Size: 4</li>
                    </ul>
                </div>;
            case "russia":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAM1BMVEX///8AOKXVKx7q6urnKgDWLyMAKqEAOKdQNpKTn84HPKba2trx8OyHlcUAMaQAPanoLQmtwTivAAABg0lEQVR4nO3Qy1XDUBTAwBtMCDjf/quFJc8qABYzFehorhuL62zDYrPkyJKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCktjm9tcJ/81t7l8s7vP4YPGY/cRit+TIkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS8KSsCQsCUvCkrAkLAlLwpKwJCwJS2Kf5+nCL6fnfHIwr3cWrzm/sThbcmRJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUlYEpaEJWFJWBKWhCVhSVgSloQlYUn8LOHgG0Xm8InP9LwRAAAAAElFTkSuQmCC"></img></li>
                        <li>Population: 146 million</li>
                        <li>Language: Russian</li>
                        <li>Size: 1</li>
                    </ul>
                </div>;
            case "mexico":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,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"></img></li>
                        <li>Population: 130 million</li>
                        <li>Language: Spanish</li>
                        <li>Size: 12</li>
                    </ul>
                </div>;
            case "germany":
                return <div className="factfile-info">
                    <ul>
                        <li><img className="country-flag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="></img></li>
                        <li>Population: 82 million</li>
                        <li>Language: German</li>
                        <li>Size: 41</li>
                    </ul>
                </div>;
            default:
                return <div className="factfile-info"></div>
        } 
    }

    function renderPics(country) {
        return <>
               <div className="grid-pic-container">
                    {country}
                </div>
                <div className="grid-pic-container">
                    {country}
                </div>
                <div className="grid-pic-container">
                    {country}
                </div>
                <div className="grid-pic-container">
                    {country}
                </div>
            </>
    }

    return (
        <div className="main">
            <div className="gallery-top">
                <p>Gallery of International photos</p>
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
                {renderPics(country)}
            </div>
            
        </div>
    )
}
