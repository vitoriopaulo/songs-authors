curl --include --request PATCH "http://localhost:4741/songs/1" \
  --header "Content-type: application/json" \
  --data '{
    "song": {
      "title": "Luisa",
      "year": "1967",
      "authors": "Jobim e Chico"
    }
  }'

echo
