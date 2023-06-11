import {
  Container,
  Row,
  Col,
  Nav,
} from 'react-bootstrap';
import Header from '../Header/Header';

const AboutMe = () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col>
          <h2>Обо мне</h2>
          <p>Меня зовут Артем, мне 25 лет,</p>
          <p>
            Я закончил профессию Frontend-разработчик на Хекслете в 2023 году.
          </p>
          <p>
            Выбрал JavaScript, поскольку мне ближе работать с визуальной
            составляющей, написав код, могу в роле пользователя взаимодействовать
            с сайтом. Я прошел бесплатные обучающие курсы и понял, что мне
            интересно и дальше развиваться в этом направлении. Даже верстка
            воспринимается как разнообразие в обучении. В программировании меня
            привлекает стабильное развитие отрасли, доступность обучающего
            материала, участие в разработке продукта, которым будут пользоваться
            другие люди, а также возможность писать работающий код.
          </p>
          <p>
            Кроме того, я имею опыт работы в области инженерного проектирования,
            что позволяет мне быть более ответственным и организованным в работе.
          </p>
          <p>
            GitHub:
            {' '}
            <Nav.Link href="https://github.com/EgorovArtem34" target="_blank" className="d-inline">
              https://github.com/EgorovArtem34
            </Nav.Link>
          </p>
          <p>Email: artegtor@gmail.com</p>
          <p>Telegram: @artegtor</p>
          <p>Готов обучаться в дальнейшем</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default AboutMe;
