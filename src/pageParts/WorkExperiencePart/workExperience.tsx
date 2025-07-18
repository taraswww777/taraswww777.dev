import React from 'react';
import { findMinMaxDates } from '../../utils/findMinMaxDates';
import { workExperienceList } from './__data';
import { calculateWorkInterval } from '../../utils/calculateWorkInterval';

export const WorkExperience = () => {
  const { minDateBegin } = findMinMaxDates(workExperienceList);
  const a = calculateWorkInterval(minDateBegin ? new Date(minDateBegin) : new Date(), new Date())

  return (<span>({a})</span>)
}
