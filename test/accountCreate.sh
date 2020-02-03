curl --location --request POST 'https://us-central1-etud-event.cloudfunctions.net/api/account/create/' \
--header 'Accept: text/plain' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'email=clement.dorlefdfdta9@etu.univ-lorraine.fr' \
--data-urlencode 'department=R&T' \
--data-urlencode 'password=titi'