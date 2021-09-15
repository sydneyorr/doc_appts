# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'
Appointment.destroy_all
Doctor.destroy_all
User.destroy_all

a = Doctor.create(name: Faker::Name.name, specialty: Faker::Job.position)
b = Doctor.create(name: Faker::Name.name, specialty: Faker::Job.position)
c = Doctor.create(name: Faker::Name.name, specialty: Faker::Job.position)
d = Doctor.create(name: Faker::Name.name, specialty: Faker::Job.position)
e =Doctor.create(name: Faker::Name.name, specialty: Faker::Job.position)

doctors =[a,b,c,d,e]


5.times do |i|
 user = User.create(name: Faker::Name.name)
 5.times do |i|
  Appointment.create(date: Faker::Date.between(from: '2014-09-23', to: '2014-09-25'), time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now), doctor_id: doctors[i].id, user_id: user.id)
 end
end