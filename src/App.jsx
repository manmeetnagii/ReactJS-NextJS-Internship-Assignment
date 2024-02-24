import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import RelatedDeals from "./components/RelatedDeals/RelatedDeals";
import Signup from "./components/Signup/Signup";
import { builder1, builder, cdk } from "./components/CardDetails";
import trophy from "./assets/trophy.svg";
import diamond from "./assets/diamond.svg";
import CardCDK from "./components/CardCDK/CardCDK";
import CardWithoutTag from "./components/CardWithoutTag/CardWithoutTag";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <Card
        name={builder1.name}
        title={builder1.title}
        desc={builder1.desc}
        highlights={builder1.highlights}
        ratings={builder1.ratings}
        ratingsTitle={builder1.ratingsTitle}
        number="1"
        img={trophy}
        cardTitle="Best Choice"
      />
      <Card
        name={builder.name}
        title={builder.title}
        desc={builder.desc}
        highlights={builder.highlights}
        ratings={builder.ratings}
        ratingsTitle={builder.ratingsTitle}
        number="2
        "
        img={diamond}
        cardTitle="Best Value"
      />
      <CardWithoutTag
        name={builder1.name}
        title={builder1.title}
        desc={builder1.desc}
        highlights={builder1.highlights}
        ratings={builder1.ratings}
        ratingsTitle={builder1.ratingsTitle}
        number="3"
      />
      <CardCDK
        name={cdk.name}
        title={cdk.title}
        desc={cdk.desc}
        ratings={cdk.ratings}
        ratingsTitle={cdk.ratingsTitle}
        number="4
        "
      />
      <div className="deals-container">
        <h2>Related deals you might like for</h2>
        <div className="deals">
          <RelatedDeals />
          <RelatedDeals />
          <RelatedDeals />
        </div>
      </div>
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
