export const home = "home";
export const gallery = "gallery";
export const devices = "devices";
export const pricelist = "pricelist";
export const contact = "contact";

export const pathToHome = "/";
export const pathToGallery = `/${gallery}`;
export const pathToDevices = `/${devices}`;
export const pathToPricelist = `/${pricelist}`;
export const pathToContact = `/${contact}`;

export const Routes = [
    {
        id: home,
        path: pathToHome,
        label: "Početna",
    },
    {
        id: gallery,
        path: pathToGallery,
        label: "Galerija"
    },
    {
        id: devices,
        path: pathToDevices,
        label: "Usluge"
    },
    {
        id: pricelist,
        path: pathToPricelist,
        label: "Cenovnik"
    },
    {
        id: contact,
        path: pathToContact,
        label: "Kontact"
    }
];