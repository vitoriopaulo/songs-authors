curl --include --request POST "http://localhost:4741/songs" \
  --header "Content-type: application/json" \
  --data '{
    "song": {
      "title": "Atirei o pau no gato",
      "year": "1500",
      "authors": "Anonimous"
    }
  }'

echo
