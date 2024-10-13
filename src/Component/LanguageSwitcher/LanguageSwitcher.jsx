
const LanguageSwitcher = ({onLanguageChange}) => {
    const handelLanguageChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
    }
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" data-lang='ARABIC' href="#" onClick={handelLanguageChange} >AR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-lang='FRENCH' href="#" onClick={handelLanguageChange} >FR</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-lang='ENGLISH' href="#" onClick={handelLanguageChange} >EN</a>
                </li>
            </ul>
        </>
    )
}

export default LanguageSwitcher;