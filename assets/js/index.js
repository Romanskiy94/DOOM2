'use strict';

const SOCIAL_NETWORKS = Object.freeze({

    FACEBOOK: "FACEBOOK",
    TWITTER: "TWITTER",
    SKYPE: "SKYPE",
    GOOGLE_PLUS: "GOOGLE_PLUS",

});


const users = [
    {
        name: "Alex",
        surname: "Mathew",
        description: "extremely large text ...",
        contacts: [

            {
                name: SOCIAL_NETWORKS.FACEBOOK,
                href: "https://m.facebook.com",
            },
            {
              name: SOCIAL_NETWORKS.TWITTER,
              href: "https://twitter.com"
            },
            {
                name: SOCIAL_NETWORKS.SKYPE,
                href: "www.skyped.ru/‎",

            }

        ]

    };
},

],
};

const userListElem = document.getElementById("usersList");
appendUsersListItems(userListElem, users);
function appendUsersListItems(usersListElem, users) {
    users.forEach(
        user => {
            usersListElem.append(createUserListItemElem(user));
        }
    );
}
function createUserListItemElem(user) {
    const userListItemElem = document.createElement("li");
    userListItemElem.append( createUserCardElem(user) );
    return userListItemElem;
}
function createUserCardElem(user) {
    const userCardWrapperElem = document.createElement("div");
    userCardWrapperElem.classList.add('userCardWrapper');
    userCardWrapperElem.classList.add('flexContainer');
    userCardWrapperElem.classList.add('flexDirectionColumn');
    userCardWrapperElem.classList.add('alignItemCenter');
    userCardWrapperElem.append(createUserPictureElem(user));
    userCardWrapperElem.append(createUserFullNameElem(user));
    return userCardWrapperElem
}
function getUserPictureElem({imageSrc}) {
    const userPictureElem = document.createElement('img');
    userPictureElem.setAttribute('src', imageSrc ? imageSrc : "./assets/images/icons/user_icons.jpeg");
    userPictureElem.setAttribute("alt", "user picture");

    return  userPictureElem;
}
function createUserPictureElem(user) {
    const userPictureContainerElem = document.createElement("div");
    userPictureContainerElem.classList.add('userPictureContainer');
    userPictureContainerElem.append( getUserPictureElem(user) );
    return userPictureContainerElem;
}
function createUserFullNameElem({name, surname}) {
    const userFullNameElem = document.createElement("div");
    userFullNameElem.innerText = `${name} ${surname}`;
    return userFullNameElem;
}
