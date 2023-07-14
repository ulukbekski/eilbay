import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { HiOutlineChevronRight} from 'react-icons/hi'

interface Category {
  name: string;
  subcategories: string[];
}

interface Props {
  categories: Category[];
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));

const AccordionComponent: React.FC<Props> = ({ categories }) => {

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='w-[300px] xs:w-full'>
      {categories.map((category, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<HiOutlineChevronRight />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography className='text-sm'>
              {category.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {category.subcategories.map((subcategory, index) => (
                <Typography key={index} className='text-sm'>{subcategory}</Typography>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
