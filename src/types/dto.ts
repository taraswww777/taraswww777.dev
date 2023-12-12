import {ReactNode} from 'react';

export interface ContactDto {
  href: string,
  code: string,
  text: string,
  icon: string
}

export interface WorkCompanyDto {
  companyName: string,
  companySite?: string,
  companySiteName?: string,
}

export interface WorkExperienceDto extends WorkCompanyDto {
  dateBegin: string,
  dateEnd?: string,
  workPosition: string,
  teamName?: string,
  technologiesTags: string[],
  description: ReactNode
}
