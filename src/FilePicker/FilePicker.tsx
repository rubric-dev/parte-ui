import { FilePickerProps } from './FilePicker.types';
import * as Styled from './FilePicker.styled';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { Caption, Paragraph } from '../@foundations/Typography';
import { Box } from '../Layout';

const defaultButtonText = (files: File[]) => {
  const fileCount = files.length;
  const action = fileCount === 0 ? 'Select' : 'Replace';
  const fileLabel = fileCount > 1 ? 'files' : 'file';

  return `${action} ${fileLabel}`;
};

const getInputValue = (files: File[]) => {
  if (files.length === 1) {
    return files[0].name;
  }

  if (files.length > 1) {
    return `${files.length} files`;
  }

  return '';
};

const FilePicker = ({
  label,
  description,
  required = false,
  placeholder = 'Select the file here!',
  name,
  disabled = false,
  multiple,
  accept,
  errorMessage,
  buttonText = defaultButtonText,
  inputText = getInputValue,
  onBlur,
  onChange,
  // FIXME: 지우기
  occurError,
}: FilePickerProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: ChangeEvent) => {
      setError(false);
      if (occurError) {
        setError(true);
        return;
      }
      // Firefox returns the same array instance each time for some reason
      const filesCopy = [...((e.target as HTMLInputElement)?.files ?? [])];

      setFiles(filesCopy);
      onChange?.(filesCopy);
    },
    [onChange]
  );

  const handleButtonClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // Setting e.target.files to an array fails. It must be a FileList
      if (e.target) {
        e.target.files = fileInputRef.current && fileInputRef.current.files;
      }

      onBlur?.(e);
    },
    [onBlur]
  );

  return (
    <Box direction="column">
      {(label || description) && (
        <Box direction="column" gap={4} style={{ marginBottom: '8px' }}>
          {label && (
            <Styled.LabelWrapper>
              {required && (
                <Caption size={200} color="R400">
                  *
                </Caption>
              )}
              <Styled.Label
                htmlFor={name}
                title={required ? 'This field is required' : ''}
              >
                {label}
              </Styled.Label>
            </Styled.LabelWrapper>
          )}
          {description && (
            <Paragraph size={100} color="N700">
              {description}
            </Paragraph>
          )}
        </Box>
      )}
      <Styled.Container
        error={error}
        disabled={disabled}
        onMouseEnter={(e) => {
          setHover(true);
        }}
        onMouseLeave={(e) => {
          setHover(false);
        }}
        onMouseDown={(e) => {
          setFocused(true);
        }}
        onMouseUp={(e) => {
          setFocused(false);
        }}
        onBlurCapture={(e) => {
          e.stopPropagation();
        }}
        onClick={handleButtonClick}
      >
        <input
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            padding: 0,
            overflow: 'hidden',
            border: 0,
          }}
          ref={fileInputRef}
          type="file"
          name={name}
          id={name}
          accept={accept}
          required={required}
          multiple={multiple}
          disabled={disabled}
          onChange={handleFileChange}
          onBlur={handleBlur}
        />
        <Styled.TextWrapper>
          <Paragraph size={100} color={files.length ? 'N800' : 'N600'}>
            {files.length ? inputText(files) : placeholder}
          </Paragraph>
        </Styled.TextWrapper>
        <Styled.Button
          hover={hover}
          focused={focused}
          error={error}
          disabled={disabled}
        >
          <Styled.ButtonText
            hover={hover}
            focused={focused}
            disabled={disabled}
            error={error}
          >
            {buttonText(files)}
          </Styled.ButtonText>
        </Styled.Button>
      </Styled.Container>
      {error && errorMessage && (
        <Paragraph size={100} color="R400" marginTop={2}>
          error text
        </Paragraph>
      )}
    </Box>
  );
};

export default FilePicker;
