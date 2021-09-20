import { Dimmer, Image, Loader, Segment } from "semantic-ui-react";

const SemanticLoader = () => {
  return (
    <Segment>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>

      <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
    </Segment>
  );
};

export default SemanticLoader;