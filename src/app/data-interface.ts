export let person = {
  id: 1,
  name: "Demaind",
  lastName: "Ubisi",
  email: "dubisi265@gmail.com",
}

export interface Person {
  id: number,
  name: string,
  lastName: string,
  email: string,
}

export interface About {
  aboutMe: string;
  resume: string;
  imagePath: string;
}

export interface Experience {
  name: string,
  title: string,
  description: string,
  startYear: string,
  endYear: string,
  personalId: number

}

export interface Education {
  name: string,
  title: string,
  description: string,
  startYear: string,
  endYear: string,
  personalId: number

}

export interface Projects {
  name: string,
  dev: string,
  languages: string,
  description: string,
  link: string,
  externalLink: string;
}

export interface Skills {
  name: string,
  skillSet: string
}

export interface Contacts {
  name: string,
  link: string
}
