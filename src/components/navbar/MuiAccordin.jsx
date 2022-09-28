import { useState } from "react";

import {
  Accordion,
  Container,
  Box,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const MuiAccordin = () => {
  const [expand, setExpand] = useState(null);

  const expandHandler = (isExpanded, panel) => {
    setExpand(isExpanded ? panel : null);
  };

  return (
    <Container>
      <Box margin={2}>
        <Accordion
          expanded={expand === "panel1"}
          onChange={(event, isExpanded) => expandHandler(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMore />}
          >
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              omnis quis, iste corporis quaerat quod ab, fugiat, amet nesciunt
              sapiente mollitia. Ullam accusamus soluta necessitatibus mollitia.
              Error ad aspernatur a!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expand === "panel2"}
          onChange={(event, isExpanded) => expandHandler(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMore />}
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              omnis quis, iste corporis quaerat quod ab, fugiat, amet nesciunt
              sapiente mollitia. Ullam accusamus soluta necessitatibus mollitia.
              Error ad aspernatur a!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expand === "panel3"}
          onChange={(event, isExpanded) => expandHandler(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMore />}
          >
            Accordion 3
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              omnis quis, iste corporis quaerat quod ab, fugiat, amet nesciunt
              sapiente mollitia. Ullam accusamus soluta necessitatibus mollitia.
              Error ad aspernatur a!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default MuiAccordin;
