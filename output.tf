output "instance_id_1" {
  description = "This is output 1"
  value       = aws_instance.server1.public_ip

}
output "instance_id_2" {
  description = "This is output 2"
  value       = aws_instance.server2.public_ip

}

