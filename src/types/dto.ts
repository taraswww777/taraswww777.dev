export interface ContactDto {
  href: string,
  code: string,
  text: string,
  icon: string
}

export interface WorkExperienceDto {
  dateBegin: string,
  dateEnd?: string,
  companyName: string,
  companySite?: string,
  companySiteName?: string,
  workPosition: string,
  teamName?: string,
  technologiesTags: string[],
  description: string
}
