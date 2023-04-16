import {Form, InputGroup} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Task13 () {
  const [text, setText] = useState('');
  const [font, setFont] = useState('Arial');
  const [fontSize, setFontSize] = useState('12px');
  const [fontWeight, setFontWeight] = useState('normal');
  const [fontColor, setFontColor] = useState('#000000');

  const handleFontChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFont(event.target.value);

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFontSize(event.target.value);

  const handleFontWeightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setFontWeight(event.target.value);

  const handleFontColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setFontColor(event.target.value);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(event.target.value);

  const handleSaveText = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'text.txt';
    document.body.appendChild(element);
    element.click();
  };

  const handleLoadText = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const text = loadEvent?.target?.result?.toString();
        if (text) {
          setText(text);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <InputGroup className="mb-3">
            <Form.Control
              as="select"
              value={font}
              onChange={handleFontChange}
            >
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
            </Form.Control>
            <Form.Control
              as="select"
              value={fontSize}
              onChange={handleFontSizeChange}
            >
              <option value="12px">12</option>
              <option value="14px">14</option>
              <option value="16px">16</option>
            </Form.Control>
            <Form.Control
              as="select"
              value={fontWeight}
              onChange={handleFontWeightChange}
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Lighter</option>
            </Form.Control>
            <Form.Control
              type="color"
              value={fontColor}
              onChange={handleFontColorChange}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={text}
            onChange={handleTextChange}
            style={{
              fontFamily: font,
              fontSize: fontSize,
              fontWeight: fontWeight,
              color: fontColor,
            }}
          />
        </Form.Group>
        <InputGroup className="mb-3">
          <Form.Group>
            <Button variant="primary" onClick={handleSaveText}>
              Сохранить в файл
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className='mx-3'
              id="file"
              type='file'
              onChange={handleLoadText}
              accept=".txt"
            />
          </Form.Group>
        </InputGroup>
      </Form>
    </div>
  );
}