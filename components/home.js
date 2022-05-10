import './home.css'
import { Carousel, Card, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="homepage">

            <div className="slides">
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.fstoppers.com/styles/full/s3/photos/168414/03/09/9da1fdd2fd97bb9f3fa385827e03ffd0.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Yumthang Valley, Sikkim</h3>
                            <p>The Bowl Of Flowers</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://live.staticflickr.com/8808/29923750865_3fcbefe4f7_b.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Stok Kangri, Ladakh</h3>
                            <p>The Paradise For Trekkers</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.onmanorama.com/content/dam/mm/en/travel/beyond-kerala/images/2020/11/1/Nohkalikai-Waterfalls.jpg.transform/onm-articleimage/image.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Nohkalikai Falls, Cherrapunji </h3>
                            <p>Cascading Water That Changes Colour</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Andaman_Islands_india.jpg/1024px-Andaman_Islands_india.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Andaman And Nicobar Islands</h3>
                            <p>The Undisturbed Honeymooners’ Getaway</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.thrillophilia.com/image/upload/s--bejISfVD--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/126/889/original/1522671846_Munnar.jpg.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Munnar, Kerala</h3>
                            <p>The Hill Town Of God’s Own Country</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


            <div className="popplaces">
                <Card style={{ width: '18rem' }} className="anime">
                    <Card.Img variant="top" src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" />
                    <Card.Body>
                        <Card.Title>Taj Mahal,Agra</Card.Title>
                        <Card.Text className="info">
                            Perhaps India's most recognizable building, the Taj Mahal is also the world's most famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife of Emperor Shah Jahan, this most beautiful of mausoleums was begun upon her death in 1631 and took 20,000 workmen until 1648 to complete.
                        </Card.Text>
                        <Button variant="primary">Go here</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="anime">
                    <Card.Img variant="top" src="https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg" />
                    <Card.Body>
                        <Card.Title>Mysore Palace</Card.Title>
                        <Card.Text className="info">
                            The sprawling city of Mysore is a delight to explore thanks to its eclectic mix of fine old colonial architecture; regal Indian palaces; and lush, well-manicured gardens. While those inclined towards shopping will enjoy spending time in the city's famous silk and sandalwood bazaars, the main attraction is magnificent Mysore Palace.
                        </Card.Text>
                        <Button variant="primary">Go here</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="anime">
                    <Card.Img variant="top" src="https://image.shutterstock.com/image-photo/tirumala-tirupati-temple-view-andra-260nw-1116249470.jpg" />
                    <Card.Body>
                        <Card.Title>Tirumala,Tirupati</Card.Title>
                        <Card.Text className="info">
                            Sri Venkateswara Swami Vaari Temple is a Hindu temple situated in the hill town of Tirumala at Tirupati in Tirupati district of Andhra Pradesh, India.
                        </Card.Text>
                        <Button variant="primary">Go here</Button>
                    </Card.Body>
                </Card>
            </div>



        </div>
    );
}

export default Home;
