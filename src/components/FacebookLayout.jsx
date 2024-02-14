import Container from "./Container";
import FacebookCard from "./FacebookCard";

export default function FacebookLayout() {
  const facebookFeed = ["hello", "hi", "yo", "hallo"];

  return (
    <Container>
      <div className="grid grid-cols-4 gap-2">
        {facebookFeed.map((card, index) => (
          <div key={index}>
            <FacebookCard card={card} />
          </div>
        ))}
      </div>
    </Container>
  );
}
