package com.wedding.directory.property;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "file")
public class FileStorageProperties {

    private String uploadDir;
    private String adUploadDir;

    public String getUploadDir() {
        return uploadDir;
    }

    public String getAdUploadDir() {
        return adUploadDir;
    }

    public void setAdUploadDir(String adUploadDir) {
        this.adUploadDir = adUploadDir;
    }

    public void setUploadDir(String uploadDir) {
        this.uploadDir = uploadDir;
    }
}
