import Form from 'react-bootstrap/Form'
import { useMemo, useState} from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

export function Task10 () {
    const [action, setAction] = useState<string>('');
    const getImage = useMemo(() => {
        switch(action) {
            case 'акита':
                return 'https://6kcmxu3d7l.a.trbcdn.net/upload/files-new/f5/1c/3d/562610_1000x1000.jpg';
            case 'аусси':
                return 'https://dog-life.com/upload/resize_cache/iblock/37a/zjll70d84cu0x1f3qtgho2toni30sp5q/570_464_2/chiens_Berger_Australien_ab07280e_e697_bde4_a1cf_9be791f12599.webp'; 
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
          <ListGroup>
              {['акита', 'аусси', "бордер-колли", "вельш-корги", "самоед"].map((type, index) => (
                <OverlayTrigger placement="right" overlay={popover}>
                    <ListGroup.Item
                      key={index}
                      onMouseEnter={() => setAction(type)}
                    >
                      {type}
                    </ListGroup.Item>
                </OverlayTrigger>
                ))}
          </ListGroup>
        </Form>
    )
}