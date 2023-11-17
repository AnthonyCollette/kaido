import React, { useEffect, useState } from "react";
import i18n from '../i18n';
import ReactFlagsSelect, {Fr} from 'react-flags-select';

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
    const [selected, setSelected] = useState("")

    const chooseLanguage = () => {
        i18n.changeLanguage(selected);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(selected);
    }

    useEffect(() => {
        chooseLanguage()
        console.log(Fr)
    }, [selected])

    return (
        <div className="language-selector">
            <ReactFlagsSelect countries={["FR", "US"]} selected={selected} onSelect={(code) => setSelected(code)} customLabels={{US: "EN", FR: 'FR'}} placeholder={'Langue'} />
        </div>
    );
};

export default LanguageSelector;