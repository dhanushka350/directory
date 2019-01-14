package com.wedding.directory.payload;

public class CategoryDto {
    private int id;
    private String category;
    private String adCount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAdCount() {
        return adCount;
    }

    public void setAdCount(String adCount) {
        this.adCount = adCount;
    }
}
