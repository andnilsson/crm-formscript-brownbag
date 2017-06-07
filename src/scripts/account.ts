import { Contact } from './../domain/model/contact';
import { common } from 'crm-common-js';
import { AccountForm } from './../domain/model/account';
const model = new AccountForm();
export async function onLoad(){
    model.primarycontactid.addOnChange(changeAddress);
    model.primarycontactid.fireOnChange();
}

async function changeAddress() {
    if(!model.address1_line1.getValue()) return;
    if(!model.primarycontactid.getValue() || model.primarycontactid.getValue().length != 1) return;

    var primarycontact = await retrieveContact(common.getWebapiFormattedIdFromLookup("primarycontactid"));
    
    model.address1_line1.setValue(primarycontact.address1_line1);
    model.address1_city.setValue(primarycontact.address1_city);
    model.address1_country.setValue(primarycontact.address1_country);     
}

async function retrieveContact(id: string): Promise<Contact> {
    return new Promise<Contact>((resolve,reject) => {        
        common.webapi.retrieverecord(id, (new Contact).getSchemaName(), "", (data) => {            
            resolve(data);
        })
    });    
}