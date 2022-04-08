FROM golang:1.15

WORKDIR /go/src/app
ENV PATH="/go/bin:${PATH}"
ENV GO111MODULE=on
ENV CGO_ENABLED=1

COPY app .

RUN go build main.go

CMD ["tail", "-f", "/dev/null"]