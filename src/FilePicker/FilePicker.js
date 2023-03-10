import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Styled from './FilePicker.styled';
import { useCallback, useRef, useState } from 'react';
import { Box } from '../Layout';
import { Caption, Paragraph } from '../@foundations/Typography';
import TextInput from '../TextInput';
const defaultButtonText = (files) => {
    const fileCount = files.length;
    const action = fileCount === 0 ? 'Select' : 'Replace';
    const fileLabel = fileCount > 1 ? 'files' : 'file';
    return `${action} ${fileLabel}`;
};
const getInputValue = (files) => {
    if (files.length === 1) {
        return files[0].name;
    }
    if (files.length > 1) {
        return `${files.length} files`;
    }
    return '';
};
const FilePicker = ({ label, description, required = false, placeholder = 'Select the file here!', name, disabled = false, multiple, accept, errorMessage, inputText = getInputValue, buttonText = defaultButtonText, onBlur, onChange, }) => {
    const [files, setFiles] = useState([]);
    const [inputFocused, setInputFocused] = useState(false);
    // textInput 컴포넌트를 참조
    const inputRef = useRef(null);
    // file picker의 역할을하는 input엘리먼트를 참조
    const fileInputRef = useRef(null);
    const handleFileChange = useCallback((e) => {
        var _a, _b;
        // Firefox returns the same array instance each time for some reason
        const filesCopy = [...((_b = (_a = e.target) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : [])];
        setFiles(filesCopy);
        onChange === null || onChange === void 0 ? void 0 : onChange(filesCopy);
    }, [onChange]);
    const handleButtonClick = useCallback(() => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }, []);
    const handleBlur = useCallback((e) => {
        // Setting e.target.files to an array fails. It must be a FileList
        if (e.target) {
            e.target.files = fileInputRef.current && fileInputRef.current.files;
        }
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    }, [onBlur]);
    return (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "column" }, { children: [(label || description) && (_jsxs(Box, Object.assign({ display: "flex", flexDirection: "column", gap: 4, style: { marginBottom: '8px' } }, { children: [label && (_jsxs(Styled.LabelWrapper, { children: [required && (_jsx(Caption, Object.assign({ size: 200, color: "R400" }, { children: "*" }))), _jsx(Styled.Label, Object.assign({ htmlFor: name, title: required ? 'This field is required' : '' }, { children: label }))] })), description && (_jsx(Paragraph, Object.assign({ size: 100, color: "N700" }, { children: description })))] }))), _jsxs(Styled.Container, { children: [_jsx("input", { style: {
                            position: 'absolute',
                            width: 0,
                            height: 0,
                            padding: 0,
                            overflow: 'hidden',
                            border: 0,
                        }, ref: fileInputRef, type: "file", name: name, id: name, accept: accept, required: required, multiple: multiple, disabled: disabled, onChange: handleFileChange, onBlur: handleBlur }), _jsx(Styled.FilePickerInput, Object.assign({ focused: inputFocused }, { children: _jsx(TextInput, { disabled: disabled, ref: inputRef, onFocus: () => setInputFocused(true), onBlur: () => setInputFocused(false), fullWidth: true, errorText: errorMessage, placeholder: placeholder, value: inputText(files) }) })), _jsx(Styled.FilePickerButton, Object.assign({ variant: "secondary", disabled: disabled, error: !!errorMessage, onClick: handleButtonClick }, { children: buttonText(files) }))] })] })));
};
export default FilePicker;
