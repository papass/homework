import Form from 'react-bootstrap/Form'
import { useMemo, useState,   useRef, createRef} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Image from 'react-bootstrap/Image'

export function Task4 () {
    const [action, setAction] = useState<string>('');
    const getImage = useMemo(() => {
        switch(action) {
            case 'акита':
                return 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/f5/1c/3d/562610_1000x1000.jpg';
            case 'аусси':
                return 'https://malinois.com.ua/wp-content/uploads/2022/02/%D0%B0%D0%B9%D0%B2%D0%B8.jpg'; 
            case 'бордер-колли':
                return 'https://www.purinaone.ru/dog/sites/default/files/2021-08/%D0%91%D0%BE%D1%80%D0%B4%D0%B5%D1%80-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B8%20%28506%D1%85379%29_0.jpg'; 
            case 'вельш-корги':
                return 'https://s8.stc.all.kpcdn.net/family/wp-content/uploads/2022/02/korgi-na-trave-960x540-1.jpg';  
            case 'самоед':
                return 'https://www.petshealth.ru/upload/medialibrary/103/1037036a4ad6495c1b789eb99766844f.jpg';
        }
    } , [action]);

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{action}</Popover.Header>
          <Popover.Body>
            <Image fluid src={getImage}></Image>
          </Popover.Body>
        </Popover>
      );

    return (
        <Form>
                {['акита', 'аусси', "бордер-колли", "вельш-корги", "самоед"].map((type, index) => (
                <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
                    <div key={`default-${type}`} className="mb-3 w-25">
                        <Form.Check 
                        type="radio"
                        key={index}
                        name="group1"
                        id={`default-${type}`}
                        label={type}
                        value={type}
                        onChange={e => setAction(e.target.value)}
                    />
                </div>
                </OverlayTrigger>
                ))}
        </Form>
    )
}