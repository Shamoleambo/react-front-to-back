import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback or service</p>

        <p>
          <a href="/">Back to home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
