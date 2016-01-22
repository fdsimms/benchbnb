# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all

bench1_description = "A nice bench near greenery on Hagiwara Tea Garden Drive."
bench1_lat = 37.771476
bench1_lng = -122.467664
bench1 = Bench.create({
  description: bench1_description,
  lat: bench1_lat,
  lng: bench1_lng
})

bench2_description = "An understated bench near Music Concourse Drive."
bench2_lat = 37.770152
bench2_lng = -122.467105
bench2 = Bench.create({
  description: bench2_description,
  lat: bench2_lat,
  lng: bench2_lng
})
