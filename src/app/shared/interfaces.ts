export interface Week {
  days: Day[];
}
interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

export interface SingClient {
  name: string;
  phone: string;
  dateSing: string;
  hours: string;
  text: string;
  _id?: any;
}

export interface Admin {
  login: string;
  password: string;
  _id?: any;
}

export interface Foto {
  imageSrc: string;
  name: string;
  _id?: any;
  src?: string;
}
