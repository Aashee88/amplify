provider "aws" {
    region = "us-east-1"
    access_key = "AKIAR7PGE6UMF2TE7C7Z"
    secret_key = "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"
}

resource "aws_instance" "server1" {
  ami = "ami-033b95fb8079dc481"
  instance_type = "t2.micro"
key_name = "test_key"

  tags = {
    Name = "$(var.test_variable)"
  }
}


resource "aws_instance" "server2" {
  ami = "ami-033b95fb8079dc481"
  instance_type = "t2.micro"
key_name = "test_key"

  tags = {
    Name = "ws3"
  }
}


/*resource "aws_vpc" "public3" {
  cidr_block       = "10.30.0.0/16"
  instance_tenancy = "default"

  tags = {
    Name = "public3"
  }
}


resource "aws_internet_gateway" "IGW2" {
  vpc_id = aws_vpc.public3.id

  tags = {
    Name = "IGW2"
  }
}

resource "aws_route_table" "RT2" {
  vpc_id = aws_vpc.public3.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.IGW2.id
  }
tags = {
    Name = "RT2"
  }
}


resource "aws_subnet" "SB2" {
  vpc_id     = aws_vpc.public3.id
  cidr_block = "10.30.0.0/20"

  tags = {
    Name = "SB2"
  }
}
resource "aws_subnet" "SB21" {
  vpc_id     = aws_vpc.public3.id
  cidr_block = "10.30.20.0/24"

  tags = {
    Name = "Main"
  }
}


resource "aws_security_group" "SG2" {
  name        = "SG2"
  description = "Allow TLS inbound traffic"
  vpc_id      = aws_vpc.public3.id

  ingress {
    description      = "ssh"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    
  }
  ingress {
    description      = "http"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]

}
}
*/