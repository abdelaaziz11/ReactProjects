import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const ParentPage = () => {

    const [currentLanguage, setCurrentLanguage] = useState('ARABIC')

    return (
        <>
            <LanguageSwitcher onLanguageChange={value=>{setCurrentLanguage(value)}} />
            <hr/>
            <div>
                Current Language : {currentLanguage}
            </div>
            <hr/>
        </>
    )
}

export default ParentPage;