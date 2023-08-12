import React, { ReactElement, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { HiOutlineChevronRight } from 'react-icons/hi';
import Image from 'next/image';

interface Category {
  name: string;
  categoryIcon:  string;
  subcategories: string[];
  subCategorieLinks: string[];
}

interface Props {
  categories: Category[];
}

const accordionContainerStyle = {
width: '250px'
};

const accordionStyle = {
  '&:hover': {
    backgroundColor: '#f5f5f5'
  }
};

const AccordionComponent: React.FC<Props> = ({ categories }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={accordionContainerStyle}>
      {categories.map((category, index) => (
        <div key={index}>
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={() => handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<HiOutlineChevronRight />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Image 
              src={category.categoryIcon}
              alt={category.name}
              height={24}
            />
            <Typography fontSize={16} marginLeft="10px" >{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              {category.subcategories.map((subcategory, index) => (
                <Typography key={index} fontSize={14}>
                  {subcategory}
                </Typography>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;

