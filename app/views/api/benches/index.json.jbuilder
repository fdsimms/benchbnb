json.array! @benches do |bench|
  json.description bench.description
  json.id bench.id
  json.lat bench.lat
  json.lng bench.lng
end
