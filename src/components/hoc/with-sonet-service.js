import React from "react";
import { SonetServiceConsumer } from "../sonet-service-context/sonet-service.js";

const withSonetService = () => Wrapped => {
  return props => {
    return (
      <SonetServiceConsumer>
        {sonetService => <Wrapped {...props} sonetService={sonetService} />}
      </SonetServiceConsumer>
    );
  };
};

export default withSonetService;
